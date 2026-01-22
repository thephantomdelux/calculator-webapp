import Calculation from "../models/calculator-schema.js"

export const calculate = async (req ,res ) => {
    try {
        const {num1, num2, operation} = req.body;

        let result;

        switch (operation){
            case "add":
                result = num1 + num2;
                break;
            case "multiply" :
                result = num1 * num2;
                break;
            case "divide":
                if (num2 == 0){
                   return res.json({message : "Division By zero is not allowed"})
                }
                result = num1 / num2;
                break;
            case "subtract":
                result = num1 - num2;
                break;
            default : 
            return res.json({message : "Invalid Operation"});
        }
        const calculation = await Calculation.create ({
            num1, num2, operation, result
        });
        res.json(calculation);
    } catch (error) {
            res.json({message : error.message});
    }
}

export const getHistory = async (req,res) => {
    const history = await Calculation.find().sort({createdAt : -1})
    res.json(history);
}