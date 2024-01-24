import HeaderBreadcrumbs from "../../components/HeaderBreadcrumbs"
import Page from "../../components/Page"

const StudentAttendancePage = () => {

    return <>
        <Page title="Student : Attendance">

            <HeaderBreadcrumbs
                heading="Attendance"
                links={[
                    { name: 'Student', href: "" },
                    { name: 'Attendance' },
                ]}
                action={
                    <>

                    </>
                }
            />
        </Page>
    </>

}

export default StudentAttendancePage