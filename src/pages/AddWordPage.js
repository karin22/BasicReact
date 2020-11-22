
import styled from 'styled-components';
import {  Button, Input, notification, Select } from 'antd';
import React,{ useState , useContext } from 'react';
import AppContext from '../context/AppContext';

const StyledWrapper = styled.div`
 padding: 20px 10%;

@media(max-width: 425px) {
  padding: 20px 10px;
}

.select-types {
  width: 100%;
}

.form-item {
  margin-bottom: 10px;
}
  
`;

const typsOption = [
    { label: 'Noun ', value: 'Noun' },
    { label: 'Verb ', value: 'Verb' },
    { label: 'ADV ', value: 'ADV' },
    { label: 'ADJ ', value: 'ADJ' },
  ]

const AddWordPage = () => {

  const {vocabController} = useContext(AppContext) 
  const {addVocab} = vocabController;

    const [word, setWord] = useState('');
    const [type, setType] = useState([]);
    const [meaning, setMeaning] = useState('');

   
  const handlerClick = () => {

    addVocab(word,type,meaning);
    
    notification['success']({
      message:'Success',
      description : 'Add word successful'
    })
  }


    return (
        <StyledWrapper>
        <div>

        <div className ='form-item'>
          <div>
            <label htmlFor='word-input'>
                        Word
            </label>
          </div>
          <Input id="word-input" placeholder="English Word" onChange={(event)=>{ setWord(event.target.value); }} />
        </div>

        <div className ='form-item'>
          <div>
            <label htmlFor='select-type'>
                        Type
            </label>
          </div>
          <Select className='select-types' id="select-type" options={typsOption} mode="multiple" onChange={(value)=>{ setType(value) }} />
        </div>

        <div className ='form-item'>
          <div>
            <label htmlFor='word-input'>
                        Meanings
            </label>
          </div>
          <Input id="word-input" placeholder=" Meanings" onChange={(event)=>{ setMeaning(event.target.value); }} />
        </div>

      </div>
      
      <Button  className ='form-item' onClick={handlerClick}>Add vocab</Button>
      </StyledWrapper>

    )
}

export default AddWordPage
