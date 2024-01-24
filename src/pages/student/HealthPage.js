import HeaderBreadcrumbs from "../../components/HeaderBreadcrumbs"
import Page from "../../components/Page"

const StudentHealthPage = () => {

    return <>
        <Page title="Student : Health">

            <HeaderBreadcrumbs
                heading="Health"
                links={[
                    { name: 'Student', href: "" },
                    { name: 'Health' },
                ]}
                action={
                    <>

                    </>
                }
            />
        </Page>
    </>

}

export default StudentHealthPage