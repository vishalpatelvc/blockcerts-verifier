import connector from '../../../store/connector';
import { SocialShare } from './SocialShare';
import { getRecordLink } from '../../../selectors/certificate';

export const mapStateToProps = (state) => ({
  url: getRecordLink(state)
});

const SocialShareContainer = connector(SocialShare, { mapStateToProps });
export { SocialShareContainer };