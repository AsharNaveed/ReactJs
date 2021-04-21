import "./main.css";
import hello from "../../assets/hello.svg";
import Chart from "../charts/charts";

const Main = () => {
    return(
        <main>
            <div className="main__container">
                <div className="main__title">
                    <img src={hello} alt="hello" />
                    <div className="main__greeting">
                        <h1>Hello Ashar Naveed</h1>
                        <p>Welcome to Admin Panel</p>
                    </div>
                </div>

                <div className="main__cards">
                    <div className="card">
                        <i className="fa fa-user-o fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Clients</p>
                            <span className="font-bold text-title">578</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-globe fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Domains</p>
                            <span className="font-bold text-title">2467</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-cloud fa-2x text-yellow"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Hostings</p>
                            <span className="font-bold text-title">3404</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-briefcase fa-2x text-green"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Projects</p>
                            <span className="font-bold text-title">6000</span>
                        </div>
                    </div>
                </div>

                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Islamabad, Pakistan</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <Chart />
                    </div>

                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Stats Reports</h1>
                                <p>Islamabad, Pakistan</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>

                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Income</h1>
                                <p>$75,500</p>
                            </div>
                            <div className="card2">
                                <h1>Traffic</h1>
                                <p>$124,000</p>
                            </div>
                            <div className="card3">
                                <h1>Satisfaction</h1>
                                <p>100%</p>
                            </div>
                            <div className="card4">
                                <h1>Completion</h1>
                                <p>100%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;