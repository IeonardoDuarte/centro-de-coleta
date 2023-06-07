"use client";
import "./styles.css";
import { useEffect, useState } from "react";
import getSchedulingData from "../../../util/getSchedulingData";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import Modal from "@/components/Modal";
import { citySelect, collectType, stateSelect } from "@/data/scheduling/formsData";
import convertDate from "../../../util/convertDate";

export default function Dashboard() {
  const router = useRouter();
  const [items, setItems] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getSchedulingData();
      setItems(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function checkAuth() {
      const auth = await getAuth();
      const user = auth.currentUser;
      if (!user) {
        // router.push("/login");
      }
    }
    checkAuth();
  }, []);

  const handleOpenModal = (schedule) => {
    setSelectedSchedule(schedule);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedSchedule(null);
  };

  return items ?
    <>
      <div className="dashboard__nav_bar">
        <h1 className="dashboard__nav_bar__title">Agendamentos</h1>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Data de retirada</th>
            <th>Tipo de coleta</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) =>
            <tr key={`${index}`} onClick={() => handleOpenModal(item.data())}>
              <td>{item.data().name}</td>
              <td>{item.data().CPF}</td>
              <td>{convertDate(item.data().pickupDate)}</td>
              <td>{collectType[item.data().collectType]}</td>
            </tr>
          )}
        </tbody>
      </table>
      {selectedSchedule && (
        <Modal isOpen={isOpen} handleClose={handleCloseModal} >
          <ul className="modal__list">
            <li className="modal__list__item">Nome: {selectedSchedule.name}</li>
            <li className="modal__list__item">CPF: {selectedSchedule.CPF}</li>
            <li className="modal__list__item">Data de retirada: {convertDate(selectedSchedule.pickupDate)}</li>
            <li className="modal__list__item">Tipo de coleta: {selectedSchedule.collectType}</li>
            <li className="modal__list__item">Estado: {stateSelect[selectedSchedule.state].label}</li>
            <li className="modal__list__item">Cidade: {citySelect[selectedSchedule.state][selectedSchedule.city].label}</li>
            <li className="modal__list__item">Endereço: {selectedSchedule.address}</li>
          </ul>
        </Modal>
      )}
    </>
   : <h1>Loading...</h1>
}