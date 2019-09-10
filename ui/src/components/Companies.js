import React,{ Component }  from 'react';
import { Link } from "react-router-dom";

import '../_style/style_companies.css';

class Companies extends  Component{
    state = {
        CompaniesNameSort: true,
        CompaniesServesSort: true,
        CompaniesNumberSort: true,
        renderModalWindow: true

    };

    renderModal = () => {
        setTimeout(() => this.setState({ renderModalWindow: false }), 2000);
        this.setState({ renderModalWindow: true })
    };
    render() {
        const { companies,
                  error,
                  companiesNameSort,
                  companiesServesSort,
                  companiesNumberSort,
                  handleDeleteCompany,
                  handleSortByNameUp,
                  handleSortByNameDesc,
                  handleSortByServesUp,
                  handleSortByServesDesc,
                  handleSortByNumberUp,
                  handleSortByNumberDesc
        } = this.props;

        const CompanyItem = companies && companies.map((item, index) =>{
            return (
                <div className="table-body-row" key={index}>
                    <div className="table-body-col">{index+1}</div>
                    <div className="table-body-col">
                        <Link className="" to={`/company/${item._id}`} >
                            {item.name}
                        </Link>
                    </div>
                    <div className="table-body-col">{item.service_of_activity}</div>
                    <div className="table-body-col">{item.number_of_employees}</div>
                    <div className="table-body-col" onClick={e => handleDeleteCompany(item._id)}> <span></span> </div>
                </div>
            )
        });
        return (
            <div className='companies-wrapper'>
                <div className='companies-table-wrapper'>
                    <div className="companies-table">
                        <div className='companies-table-title'>
                            <div className="table-title-row">
                                <div ></div>
                                <div className="table-title-col"
                                     onClick={ e => companiesNameSort ?
                                         handleSortByNameUp() :
                                         handleSortByNameDesc()}
                                >
                                    Company name <span></span>
                                </div>
                                <div className="table-title-col"
                                     onClick={e => companiesServesSort ?
                                         handleSortByServesUp() :
                                         handleSortByServesDesc()}
                                >
                                    Service of activity <span></span>
                                </div>
                                <div className="table-title-col"
                                     onClick={e => companiesNumberSort ?
                                         handleSortByNumberUp() :
                                         handleSortByNumberDesc()}
                                >
                                    Number of employees <span></span>
                                </div>
                                <div ></div>
                            </div>
                        </div>
                        <div className="companies-table-body">
                            {CompanyItem}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Companies;
