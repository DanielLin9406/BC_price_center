import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addPromotionInQueue, applyPromotionNow } from "../../../modules/scheduledPrice";
import SetPriceRule from './SetPriceRule';

const mapStateToProps = state => ({
  promotion: state.scheduledPrice.promotion,
  priceSet: state.scheduledPrice.priceSet,
  isLoading: state.scheduledPrice.isLoading,
  errMsg: state.scheduledPrice.errMsg,    
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addPromotionInQueue, applyPromotionNow }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetPriceRule);