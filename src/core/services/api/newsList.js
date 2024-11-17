import http from '../interceptor'

export const newsList = async(RowsOfPage, PageNumber, search)=>{
    try {
        const queryObj = {}
        if(RowsOfPage!== "" && RowsOfPage!==null) queryObj.RowsOfPage = RowsOfPage;
        if(PageNumber!== "" && PageNumber!==null) queryObj.PageNumber = PageNumber;
        if(search!== "" && search!==null) queryObj.Query = search;
        // if(activation!== "" && activation!==null) queryObj.IsActive = activation;

        const result = await http.get('/News/AdminNewsFilterList',{params:queryObj})
        return result;
    } catch (error) {
        console.log(error)
    }
}