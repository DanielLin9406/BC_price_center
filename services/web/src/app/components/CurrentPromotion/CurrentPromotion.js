import React from 'react';
import Section, { SectionBody, SectionHeader } from '@app/dump/Section';
import Panel from '@app/dump/Panel';
import { GreenButton } from '@app/dump/Button';
import TextList, { TextItem } from '@app/dump/TextList';
import testFetchLoading from '@app/shared/testHelper';

const CurrentPromotion = props => {
  const { loading, errMsg, promotion } = props;
  const isLoading = testFetchLoading(loading);

  const onChangePromotion = () => {
    const { onLive } = promotion;
    props.loadPromotion(onLive);
  };

  return (
    <Section className="current-promotion">
      <SectionHeader>Promotion Schedule on Live</SectionHeader>
      <SectionBody isLoading={isLoading} errMsg={errMsg}>
        <Panel>
          {(promotion.onLive && (
            <>
              <TextList>
                <TextItem>{promotion.queue[promotion.onLive].name}</TextItem>
                <TextItem>
                  {promotion.queue[promotion.onLive].startDate}-
                </TextItem>
                <TextItem>{promotion.queue[promotion.onLive].endDate}</TextItem>
              </TextList>
              <GreenButton onClick={onChangePromotion}>
                Load onLive Promotion Details
              </GreenButton>
            </>
          )) || <>There is no promotion on live</>}
        </Panel>
      </SectionBody>
    </Section>
  );
};

export default CurrentPromotion;
