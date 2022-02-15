const CardNFT = (props: any) => {
  return (
    <>
      <div className={ (props.className) ? props.className+ ' card nft-card' : `card nft-card` }>
        <img src={ props.imgSrc } className="card-img-top" alt="NFT Card." />
        <div className={`card-body ` + props.bg }>
          <div className="d-flex justify-content-between">
            <h6 className={ props.color.series + ` ntf-series` }>{ props.name }</h6>
            <h6 className={ props.color.top + ` nft-top-bid` }>
                { (props.bid) ? 'TOP BID' : '' }
            </h6>
          </div>
          <div className="d-flex justify-content-between">
            <h5 className={ props.color.nftName + ` fw-bolder` }>
               { props.name }
            </h5>
            <h5 className={ props.color.nftPrice }>
                {
                    (props.logo !== "" && props.logo !== undefined) ? 
                    <img src={props.logo} alt={ props.name } className="logo-currency" /> 
                    : ''
                }
                
                { props.price } { props.currency } 
            </h5>
          </div>
          <div className="d-flex justify-content-between">
            <p className={ props.color.level }># {props.leader}</p>
            <p className={ props.color.day }>{ props.lastupdate }</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardNFT;
