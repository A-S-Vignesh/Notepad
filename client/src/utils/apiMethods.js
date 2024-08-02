import useStore from "../zustand/useStore";
import { getNotesAPI } from "./constant"


export const fetchNotesData = async () => {
    try {
        const rawData = await fetch(getNotesAPI)
        const data = await rawData.json();
        return await data;
    }
    catch (err)
    {
        console.log(err);
    }

}