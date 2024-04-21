"use client"
// import styles from "./page.module.css";
// import { useState } from "react";
import Content from  "@/components/Content";
import styles from '../styles.module.css'


export default function Page() {
  // const [notes, setNotes] = useState([]);

  const content = (
    <div>
      test
    </div>
  );
  
  return <Content content={content} />
}
