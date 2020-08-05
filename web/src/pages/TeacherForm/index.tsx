import React from 'react';
import PageHeader from '../../components/PageHeader';
import { PageTeacherForm } from './styles'
function TeacherForm(){
  return(
    <PageTeacherForm className="container">
      <PageHeader
      title="Que incrível que você quer da aulas."
      description="O primeiro passo é preencher esse formulário de inscrição."
      />
    </PageTeacherForm>
  )
}

export default TeacherForm;