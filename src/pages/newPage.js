import React from 'react';
import MetaTags from 'react-meta-tags';  // Added Meta Tag npm Package
import { Container } from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../components/Common/Breadcrumb";

    const newPage = () => {
        return (
            <>
                <div className="page-content">
                    <MetaTags>
                    <title>New Page | Skote - React Admin & Dashboard Template</title>
                    </MetaTags>
                    <Container fluid={true}>
                        <Breadcrumbs title="New Page" breadcrumbItem="New Page" />
                        
                            <div>Hellow World</div>

                    </Container>
                </div>
            </>
        );
    }

export default newPage;
