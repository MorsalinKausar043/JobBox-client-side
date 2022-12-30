import { userSlice } from "./userSlice";


const userApi = userSlice.injectEndpoints({
    endpoints: (builder) =>({
        register: builder.mutation({
            query: (data) =>({
                method: "POST",
                url:"/user",
                body:data,
            })
        })
    })
})

export const {useRegisterMutation} = userApi;