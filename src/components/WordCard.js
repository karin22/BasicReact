import React from 'react'
import styled from 'styled-components'
import { DeleteOutlined } from '@ant-design/icons'

const StyledWrapper = styled.div`
    box-shadow : 0 0 6px 0 rgba(0,0,0,.25);
  
    padding : 10px;
    border-radius : 10px;

    .top{
        /* display:flex; จัดแนวนอน */
        display:flex;
        /* justify-content: space-between; จัดให้แยกออกจากกัน */
        justify-content: space-between;
        /* dalign-items :center; จัดให้อยู่ตรงกลาง */
        align-items :center;
    }
    .icon{
        color:red;
        /* เป็นรูปนิ้วเมื่อเมาส์ชี้ */
        cursor:pointer;
    }

`


const WordCard = (props) => {

    const fomatDate = props.createdAT ? props.createdAT.toLocaleDateString('th-TH', {
        day : "numeric",
        month : "long",
        year : "numeric" , 
        hour : "numeric",
        minute : "numeric"
}) : "";

    return (
        <StyledWrapper>
            <div className="top">
                <div>   <b>{props.word}</b>
                    <span>
                        {/* .join() */}
                    ({props.types.join(",")})
                </span>
                </div>
                <DeleteOutlined className='icon' onClick={props.onDelete} />
            </div>
            <div className="body">
                <p>{props.meanings.join(",")}</p>
            </div>
            <div>
                Date : {fomatDate}
            </div>
        </StyledWrapper>
    )
}

export default WordCard
