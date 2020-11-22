import WordCard from '../components/WordCard'
import { Row, Col, Input, } from 'antd';
import styled from 'styled-components';
import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';
import { Loading3QuartersOutlined } from '@ant-design/icons'

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


function HomePage() {

  const { vocabController } = useContext(AppContext);
  const { vocabs, deleteVocab } = vocabController;

  const [ search, setSearch ]  = useState('');

  const randerVocabs = () => {

    // !vocabs  =====  vocabs==null
    if (!vocabs) {
      return <Loading3QuartersOutlined spin />
    }
    if (vocabs.length <= 0) {
      return <p>No data</p>
    } else {
      return vocabs

      /// filter ถ้าเป็น ture = 0 ถ้า false = -1 
      .filter((item) => {
        return item.word.indexOf(search) >= 0

      }).sort((a, b) => {

        ///เปลี่ยนค่าวันที่ เป็นมิลลิเซค ก่อน แล้วนำมาเรียง ตามวันที่
        return b.createdAT.valueOf() - a.createdAT.valueOf()

      }).map((item, index) => {
        return (
          <Col key={index} xs={24} sm={12} md={8} lg={6} >
            <WordCard  {...item} onDelete={() => { deleteVocab(item.word) }} />
          </Col>
        )
      })
    }

  }

  return (
    <StyledWrapper>
      <h1>My vocabularies</h1>

      <Input.Search value={search} onChange={e => setSearch(e.target.value)} />
      <br/><br/><br/>

      <Row gutter={[16, 24]}>

        {randerVocabs()}

      </Row>
    </StyledWrapper>
  );


}

export default HomePage;
