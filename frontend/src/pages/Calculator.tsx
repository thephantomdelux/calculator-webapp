import { useState } from "react";
import api from "../api/axios";

const [num1, setNum1] = useState("");
const [num2, setNum2] = useState("");
const [operation, setOperation] = useState("add");
const [result, setResult] = useState<number | null>(null);
const [error, setError] = useState("");



const handleCalculate = async () => {
    setError("");

    
}