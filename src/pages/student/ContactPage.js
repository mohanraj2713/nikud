
import { useEffect, useState } from "react"
import DynamicTableComponent from "../../components/custom-table/Table"
import HeaderBreadcrumbs from "../../components/HeaderBreadcrumbs"
import Page from "../../components/Page"


const StudentContactPage = () => {

    const [data,setData] = useState([])
    const header = [
        { id: 'year', label: 'Year', align: 'left' },
        { id: 'board', label: 'Board', align: 'left' },
        { id: 'school_name', label: 'School Name', align: 'left' },
        { id: 'class', label: 'Class', align: 'center' },
        { id: 'medium', label: 'Medium', align: 'left' },
        { id: 'group', label: 'Group', align: 'left' },
        { id: '2nd_language', label: '2nd Language', align: 'left' },
        { id: '3rd_language', label: '3rd Language', align: 'left' },
        { id: 'percentage', label: 'Percentage / Grade', align: 'center' },
        { id: 'remarks', label: 'Remarks', align: 'left' },
        { id: 'remarks', label: 'Remarks', align: 'left' },
        { id: '', label: '', align: '' },
    ]


    useEffect(()=>{
        getData()
    },[])

    const getData =()=>{
        setData([
            {year:"2020",board:"A",school_name:"A",class:"1",medium:"A",group:"A","2nd_language":"A","3rd_language":"A",percentage:"A",remarks:"A"},
            {year:"2020",board:"B",school_name:"B",class:"1",medium:"B",group:"B","2nd_language":"B","3rd_language":"B",percentage:"B",remarks:"B"},
            {year:"2020",board:"C",school_name:"C",class:"1",medium:"C",group:"C","2nd_language":"C","3rd_language":"C",percentage:"C",remarks:"C"},
            {year:"2020",board:"D",school_name:"D",class:"1",medium:"D",group:"D","2nd_language":"D","3rd_language":"D",percentage:"D",remarks:"D"},
            {year:"2020",board:"E",school_name:"E",class:"1",medium:"E",group:"E","2nd_language":"E","3rd_language":"E",percentage:"E",remarks:"E"},
            {year:"2020",board:"F",school_name:"F",class:"1",medium:"F",group:"F","2nd_language":"F","3rd_language":"F",percentage:"F",remarks:"F"},
            {year:"2020",board:"G",school_name:"G",class:"1",medium:"G",group:"G","2nd_language":"G","3rd_language":"G",percentage:"G",remarks:"G"},
            {year:"2020",board:"H",school_name:"H",class:"1",medium:"H",group:"H","2nd_language":"H","3rd_language":"H",percentage:"H",remarks:"H"},
            {year:"2020",board:"A",school_name:"I",class:"1",medium:"I",group:"I","2nd_language":"I","3rd_language":"I",percentage:"I",remarks:"I"},
            {year:"2020",board:"J",school_name:"J",class:"1",medium:"J",group:"J","2nd_language":"J","3rd_language":"J",percentage:"J",remarks:"J"},
        
        ])
    }

    return <>
        <Page title="Student : Contact">

            <HeaderBreadcrumbs
                heading="Contact"
                links={[
                    { name: 'Student', href: "" },
                    { name: 'Contact' },
                ]}
                action={
                    <>

                    </>
                }
            />
            <DynamicTableComponent header={header} TABLE_DATA={data} />
        </Page>
    </>

}

export default StudentContactPage