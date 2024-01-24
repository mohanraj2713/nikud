import { useCallback, useEffect, useMemo, useState } from 'react';
import { Box, Card, Grid, Typography } from "@mui/material"
import HeaderBreadcrumbs from "../../components/HeaderBreadcrumbs"
import Page from "../../components/Page"
import CardComponent from "../../components/card/CardComponent"
import { RHFUploadAvatar } from "../../components/hook-form"


const StudentDetailsPage = () => {

    const [value,setValue] = useState({})

    const handleDrop =()=>{

    }

    return <>
        <Page title="Student : Details">

            <HeaderBreadcrumbs
                heading="Student Details"
                links={[
                    { name: 'Student', href: "" },
                    { name: 'Details' },
                ]}
                action={
                    <>

                    </>
                }
            />

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <>

                    <CardComponent title={"Profile"} >
                        <>
                            <Grid container spacing={3} justifyContent={"center"} display={"flex"}>
                                <Grid item xs={12} md={5}>
                                    <Card sx={{ py: 10, px: 3}} lg={5} xl={5}>
                                        <Box sx={{ mb: 5 }}>
                                            {/* <RHFUploadAvatar
                                                name="avatarUrl"
                                                accept="image/*"
                                                maxSize={3145728}
                                                onDrop={handleDrop}
                                                helperText={
                                                    <Typography
                                                        variant="caption"
                                                        sx={{
                                                            mt: 2,
                                                            mx: 'auto',
                                                            display: 'block',
                                                            textAlign: 'center',
                                                            color: 'text.secondary',
                                                        }}
                                                    >
                                                        Allowed *.jpeg, *.jpg, *.png, *.gif
                                                        <br /> max size of {fData(3145728)}
                                                    </Typography>
                                                }
                                            /> */}
                                        </Box>

                                      
                                        {/* <Stack alignItems="flex-center" sx={{ mt: 3 }}>
                                            <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                                                Submit
                                            </LoadingButton>
                                        </Stack> */}
                                    </Card>
                                </Grid>


                            </Grid>
                        </>
                    </CardComponent>

                    <Grid item xs={7} md={7} lg={7} xl={7} sx={{ px: 1, py: 1 }}>
                        <CardComponent title={"Basic Admission Details"} >
                            <>
                            </>
                        </CardComponent>
                    </Grid>

                </>


            </Grid>
        </Page>
    </>

}

export default StudentDetailsPage