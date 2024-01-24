import HeaderBreadcrumbs from "../../components/HeaderBreadcrumbs"
import Page from "../../components/Page"

const StudentContactPage = () => {

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
        </Page>
    </>

}

export default StudentContactPage