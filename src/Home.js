import React from "react";
import Product from "./Product"
import "./Home.css"
function Home() {
    return (
        <div className="home">
            <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2021/NYNY/Fuji_TallHero_NYNY_en_US_1x._CB412256579_.jpg"
                className="home__image"
                alt=""/>
                <div className="home__row">
                    <Product
                    id="121314"
                    title="The Lean Startup: How Content Innovation"
                    price={11.96}
                    ratting={4}
                    image="https://d1b14unh5d6w7g.cloudfront.net/0670921602.01.S001.LXXXXXXX.jpg?Expires=1609746146&Signature=VK/W4gBoatxU2TqC5qwT1u0vuPT/SVZhr+NxgwciXVqXbdnf+kMOFkOIAE1aCvNool3rjFjUzJFkBQmL6zG4VhCFzejtH2UKhAa3Nz/ECAMHwWa2cNqc2o4El3MD4v7123f5Iw2EB7sejqtpU5tsZpKh0xYN3uKE/8InkkVYGg8=&Key-Pair-Id=APKAIUO27P366FGALUMQ"
                    />
                    <Product
                        id="121314"
                        title="The Lean Startup: How Content Innovation"
                        price={11.96}
                        ratting={4}
                        image="https://d1b14unh5d6w7g.cloudfront.net/0670921602.01.S001.LXXXXXXX.jpg?Expires=1609746146&Signature=VK/W4gBoatxU2TqC5qwT1u0vuPT/SVZhr+NxgwciXVqXbdnf+kMOFkOIAE1aCvNool3rjFjUzJFkBQmL6zG4VhCFzejtH2UKhAa3Nz/ECAMHwWa2cNqc2o4El3MD4v7123f5Iw2EB7sejqtpU5tsZpKh0xYN3uKE/8InkkVYGg8=&Key-Pair-Id=APKAIUO27P366FGALUMQ"
                    />
                    <Product
                        id="121314"
                        title="The Lean Startup: How Content Innovation"
                        price={11.96}
                        ratting={4}
                        image="https://d1b14unh5d6w7g.cloudfront.net/0670921602.01.S001.LXXXXXXX.jpg?Expires=1609746146&Signature=VK/W4gBoatxU2TqC5qwT1u0vuPT/SVZhr+NxgwciXVqXbdnf+kMOFkOIAE1aCvNool3rjFjUzJFkBQmL6zG4VhCFzejtH2UKhAa3Nz/ECAMHwWa2cNqc2o4El3MD4v7123f5Iw2EB7sejqtpU5tsZpKh0xYN3uKE/8InkkVYGg8=&Key-Pair-Id=APKAIUO27P366FGALUMQ"
                    />
                </div>

        </div>
    );
}

export default Home