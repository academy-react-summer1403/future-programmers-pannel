import http from '../interceptor'

// export const getlist=async(sort ,search, categoryFilter)=>{
//     try {
//         console.log(categoryFilter)
//         const queryObj = {RowsOfPage: 9}
//         if(sort!== "" && sort!==null) queryObj.SortingCol = sort;
//         if(search!== "" && search!==null) queryObj.Query = search;
//         //if(categoryFilter!== "" && categoryFilter!==null) queryObj.ListTech = categoryFilter;//
//         const result=await http.get('/Home/GetCoursesWithPagination',{params:queryObj})
//         // console.log("result",result)
//         return result
//     } catch (error) {
//         console.log(error)
//     }
// }

export const userList = async()=>{
    try {
        const result = await http.get('/User/UserMannage')
        // console.log('dddd', result)
        return result
    } catch (error) {
        console.log(error)
    }
}