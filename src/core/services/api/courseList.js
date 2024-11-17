import http from '../interceptor'

export const courseList = async(RowsOfPage, PageNumber, search, expire)=>{
    try {
        const queryObj = {}
        if(RowsOfPage!== "" && RowsOfPage!==null) queryObj.RowsOfPage = RowsOfPage;
        if(PageNumber!== "" && PageNumber!==null) queryObj.PageNumber = PageNumber;
        if(search!== "" && search!==null) queryObj.Query = search;
        if(expire!== "" && expire!==null) queryObj.SortingCol = expire;
        // if(type!== "" && type!==null) queryObj.IsActiveUser = type;

        const result = await http.get('/Course/CourseList',{params:queryObj})
        return result;
    } catch (error) {
        console.log(error)
    }
}