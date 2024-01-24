import HeaderBreadcrumbs from "../../components/HeaderBreadcrumbs"
import Page from "../../components/Page"

const StudentFamilyPage = () => {

    return <>
        <Page title="Student : Family">

            <HeaderBreadcrumbs
                heading="Family"
                links={[
                    { name: 'Student', href: "" },
                    { name: 'Family' },
                ]}
                action={
                    <>

                    </>
                }
            />
        </Page>
    </>

}

export default StudentFamilyPage