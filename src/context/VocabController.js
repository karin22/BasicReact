import React, { useState, useEffect } from 'react'
import firebase from 'firebase'



// const initData = [{ "meanings": ["มาพร้อมกับ"], "word": "Accompany", "createdAt": "2020-11-15T11:56:52.792Z", "types": ["verb"] }, { "meanings": ["การเข้าซื้อกิจการ", "การเข้าถือสิทธิ์", "การครอบครอง"], "types": ["noun"], "createdAt": "2020-11-17T06:39:36.046Z", "word": "acquisition" }, { "word": "complaint", "meanings": ["การร้องเรียน", "การร้องทุกข์", "การคร่ำครวญ"], "types": ["noun"], "createdAt": "2020-11-17T07:05:40.824Z" }, { "word": "complying", "types": ["noun"], "createdAt": "2020-11-17T07:08:25.211Z", "meanings": ["การยอมตาม", "การยินยอม", "การปฏิบัติตาม"] }, { "createdAt": "2020-11-17T05:40:43.548Z", "word": "correspondence", "types": ["noun"], "meanings": ["จดหมายโต้ตอบ", "ความเหมือนกัน"] }, { "word": "delegate", "meanings": ["ตั้งตัวแทน", "มอบหน้าที่"], "types": ["verb"], "createdAt": "2020-11-16T16:44:23.992Z" }, { "types": ["verb"], "word": "deserve", "meanings": ["สมน้ำสมเนื้อ", "สมควรได้รับ"], "createdAt": "2020-11-16T16:41:43.017Z" }, { "meanings": ["พยายาม", "มุมานะ", "อุตส่าห์"], "word": "endeavor", "types": ["verb"], "createdAt": "2020-11-17T06:03:36.413Z" }, { "types": ["verb"], "word": "engage", "createdAt": "2020-11-17T05:57:17.307Z", "meanings": ["มีส่วนร่วม", "ว่าจ้าง"] }, { "createdAt": "2020-11-17T07:06:42.122Z", "types": ["noun"], "word": "grievance", "meanings": ["ความไม่พอใจ", "ความเศร้าโศก", "ความขัดข้องใจ"] }, { "types": ["adverb"], "meanings": ["โดยนัยนี้", "ด้วยเหตุนี้", "โดยวิธีนี้"], "createdAt": "2020-11-17T05:37:12.526Z", "word": "hereby" }, { "types": ["adjective"], "createdAt": "2020-11-15T11:56:25.637Z", "meanings": ["ถูกต้องตามกฎหมาย"], "word": "legitimate" }, { "word": "merger", "meanings": ["การควบรวบกิจการ"], "createdAt": "2020-11-17T06:38:39.071Z", "types": ["noun"] }, { "word": "meticulous", "createdAt": "2020-11-17T07:47:36.831Z", "types": ["adjective"], "meanings": ["พิถีพิถัน", "เข้มงวด", "กวดขัน"] }, { "createdAt": "2020-11-17T06:05:44.594Z", "types": ["noun"], "meanings": ["ขั้นตอน", "กระบวนการ", "ระเบียบการ"], "word": "procedure" }, { "meanings": ["พิถีพิถัน", "แม่นยำ", "รุนแรง"], "word": "rigorous", "createdAt": "2020-11-17T07:49:20.488Z", "types": ["adjective"] }]


const VocabController = () => {
    /////////////// firebase ///////
    const col = firebase.firestore().collection('vocabs');


    const [vocabs, setVocabs] = useState(null);

    //// ใช้ useEffect เพื่อโหลด 1 ครั้ง โดย ไม่รีเฟรช เมื่อ state อื่นเปลี่ยน 
    useEffect(() => {

        const unsub = col.onSnapshot((snapshot) => {

            const dataList = snapshot.docs.map((doc) => {

                const dataObj = doc.data();

                return {
                    ...dataObj,
                    createdAT: dataObj.createdAT ? dataObj.createdAT.toDate() : null
                }
            })

            setVocabs(dataList);

        })
        return () => {
            unsub();
        }

    }, []);

    const addVocab = (word, type, meanings) => {
        ///// การใช้  state
        // data = [...vocabs , ] เพิ่มข้อมูลเข้าใน Array โดยสร้างเป็น Array ใหม่
        // setVocabs([...vocabs, {
            //meaning.split(",") เปลี่ยนจาก String เป็น Array // map((item)=> item.trim()) ลบค่าช่องว่างในArray ซ้ายขวา //filter((i)=>i!=='' ใช้เพิ่มลบค่าที่เป็น array ว่าง
        //     "meanings": meanings.split(",").map((item) => item.trim()).filter((i) => i !== ''),
        //     "word": word,
        //     "types": type
        // }])

       return col.doc(word).set({
            "meanings": meanings.split(",").map((item) => item.trim()).filter((i) => i !== ''),
            "word": word,
            "types": type,
            createdAT: new Date()
        })
    }

    const deleteVocab = (word) => {

     return   col.doc(word).delete();
        //การใช้ state
        // const newArr = vocabs.filter((data, id) => {
        //     return id !== index
        // });
        // setVocabs(newArr);

        
    }

    return {
        vocabs: vocabs,
        setVocabs: setVocabs,
        addVocab,
        deleteVocab
    }

}

export default VocabController;