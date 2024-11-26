import http from '../interceptor'


const getComment = async(RowsOfPage, PageNumber)=>{
    try {
        const queryObj = {}
        if(RowsOfPage!== "" && RowsOfPage!==null) queryObj.RowsOfPage = RowsOfPage;
        if(PageNumber!== "" && PageNumber!==null) queryObj.PageNumber = PageNumber;

        const result = await http.get('/Course/CommentManagment',{params:queryObj})

        // console.log('dddd', result)
        return result
    } catch (error) {
        console.log(error)
    }
}

export default getComment