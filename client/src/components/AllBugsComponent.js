import React from 'react';
import BugComponent from './BugComponent';
import CurrentBugComponent from './CurrentBugComponent';
import '../css/AllBugsComponent.css';


class AllBugsComponent extends React.Component {


    
    constructor() {
        super();

        this.state = {
            loading: true,
            data: [],
            current: undefined,
            search: ''
        }

        this.filterSearch = this.filterSearch.bind(this);
    }

    //testing commit 
    //test
    async componentDidMount() {
        // const url = "http://localhost:5000/api/bugs";

        const url = "https://app1-shayan.herokuapp.com/api/bugs"

        try {
            const response = await fetch(url);
            const responseData = await response.json();

            this.setState({
                loading: false,
                data: responseData.bugs
            });

        } catch (err) {
            console.log("fetch failed", err);
        }

    }

    selectCurrentBug(id, event) {

        this.setState(
            prevState => ({
                loading: prevState.loading,
                data: prevState.data,
                current: prevState.data[id]
            })
        );

        window.scrollTo(0, 0);
 
    }

    filterSearch(e) {
        this.setState({
            search: e.target.value
        })
    }

    render() {

        const filter = this.state.data.filter( (bug) => {
            return bug.title.toLowerCase().indexOf( this.state.search.toLowerCase() ) !== -1;
        } )

        return (
            <div className={this.state.current === undefined ? "all-bugs-body-wrapper-undefined" : "all-bugs-body-wrapper-defined"}>
                
                <div className={this.state.current === undefined ? "all-bugs-wrapper-undefined" : "all-bugs-wrapper-defined"}>
                    
                <div className="search-wrapper">
                    <input placeholder="Search" onChange={this.filterSearch}/>
                </div>
                    
                    {
                        filter.map(bug => (

                            <BugComponent
                                clickBug={this.selectCurrentBug.bind(this, bug.id)}
                                key={bug.id}
                                title={bug.title}
                                status={bug.status}
                            />
                        ))
                    }
                </div>

                {this.state.current ?
                    <CurrentBugComponent 
                        title={this.state.current.title}
                        status={this.state.current.status}
                        body={this.state.current.body}
                    />
                    : null
                }

            </div>
        );

    }

}

export default AllBugsComponent;