import { Card, CardContent, CardHeader, Typography } from "@mui/material"

const CardComponent = (props) => {

    const { title, children, doSomething, aditionalTitle,shadow } = props
    return <>

        <Card style={{boxShadow:"unset"}} sx={{my:1}}>
            <CardHeader action={doSomething} subheader={aditionalTitle} title={title} />
            <CardContent>
                {children}
            </CardContent>
        </Card>

    </>

}

export default CardComponent