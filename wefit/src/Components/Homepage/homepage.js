import { useNavigate } from "react-router-dom";
import { Oval } from 'react-loader-spinner';
import styled from "styled-components";
import { useState } from "react";

function Spinner(renderSpinner, setRenderSpinner) {
    setTimeout(() => {
        setRenderSpinner(!renderSpinner);
    }, 2000);

    return (
        <>
            <Oval
                visible={true}
                height="80"
                width="80"
                color="#FFFFFF"
                secondaryColor="#FFFFF0"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </>
    );
}

export default function HomePage() {
    const navigate = useNavigate();
    const [renderSpinner, setRenderSpinner] = useState(true);

    return (
        <>
            <Page>

                {renderSpinner ? Spinner(renderSpinner, setRenderSpinner) : navigate('/MovieCatalog')}

            </Page>
        </>
    );
};

const Page = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;