import React from 'react';

import api from '../../services/api';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  user_id: number;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function creatNewConnection() {
    api.post('connections', {
      user_id: teacher.id,
    })
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name}/>
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ {teacher.cost}</strong>
        </p>

        <a 
          target="blank"
          onClick={creatNewConnection}
          href={`https://wa.me/${teacher.whatsapp}?text=Olá ${teacher.name}, ví que você dá aula no Proffy! Gostaria de mais detalhes dos seus serviços...`}
        >
          <img src={whatsappIcon} alt="WhatsApp"/>
          Entrar em contato
        </a>
      </footer>
    </article>
  )
}

export default TeacherItem;

