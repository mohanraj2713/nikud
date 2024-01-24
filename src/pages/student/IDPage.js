import HeaderBreadcrumbs from "../../components/HeaderBreadcrumbs"
import Page from "../../components/Page"

const StudentIDPage = () => {

    return <>
        <Page title="Student : ID">

            <HeaderBreadcrumbs
                heading="ID"
                links={[
                    { name: 'Student', href: "" },
                    { name: 'ID' },
                ]}
                action={
                    <>

                    </>
                }
            />
        </Page>
    </>

}

export default StudentIDPage