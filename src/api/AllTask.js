import axiosSecure from "."



export const GetTask = async Taskinfo => {
    const { data } = await axiosSecure.post(`/AllTask`, Taskinfo)
    return data
}


export const getAllTask = async () => {
    const { data } = await axiosSecure('/getAllTask')
    return data
}