import './Description.scss';


function Description() {
    return (
      <div className="description">
        <h1 className="description__title">
            BMX Rampage: 2021 Highlights
        </h1>
        <div className="description__info">
            <div className="description__info-left">
                <div className="description__author">By Red Crow</div>
                <div className="description__date">07/11/2021</div>
            </div>
            <div className="description__info-right">
                <div className="description__views">1,001,023</div>
                <div className="description__likes">110,985</div>
            </div>
        </div>
        <p className="description__paragraph">
            On a gusty day in Southern Utah, a group of 25
            daring mountain bikers blew the doors off what
            is possible on two wheels, unleashing some of
            the biggest moments the sport has ever seen.
            While mother nature only allowed for one full run
            before the conditions made it impossible to ride,
            that was all that was needed for event veteran
            Kyle Strait, who won the event for the second
            time -- eight years after his first Red Cow
            Rampage title
        </p>
      </div>
    );
  }


export default Description