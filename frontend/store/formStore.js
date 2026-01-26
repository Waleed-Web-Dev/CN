import {create} from "zustand";

const API_URL = "http://api.app.localhost:3000";

export const useformStore =  create((set) => ({
    score: null,
    loading: false,
    fillForm: async (data) => {
        set({
            loading: true,
            score: null
        })
       console.log(data);
        try{
            const response = await fetch(`${API_URL}/form/fillForm`, {
            method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({data}),
            });
            console.log("call before form store")
            const call = await response.json();
            console.log("call success form store")
            console.log(`In form Store Frontend bridge: : ${call.data}`);
            set({
                score: `${call.data}`,
                loading: false,
            })
        }catch (e) {
            set({
                loading: false,
                error: e.message,
            })
            console.error(e);
            throw e;
        }
    },
    buyProduct: async (email) => {
        console.log(email);
        try{
            const response = await fetch(`${API_URL}/checkout`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email ,
                }),
            })

            const data = await response.json();
            console.log(data);

        }catch (e) {
            console.log(e);
            throw e;
        }

    }
}))