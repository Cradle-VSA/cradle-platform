import { FollowUp, OrNull, Patient, Referral } from '@types';

import { Assessment } from './assessment';
import Button from '@material-ui/core/Button';
import { FormStatusEnum } from '../../../../../enums';
import { Header } from './header';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import { useStyles } from './styles';

interface IProps {
  followUp: OrNull<FollowUp>;
  referral: OrNull<Referral>;
  selectedPatient: Patient;
  onAddPatientRequired: (
    actionAfterAdding: () => void,
    message: string
  ) => void;
}

export const ReferralInfo: React.FC<IProps> = ({
  followUp,
  referral,
  selectedPatient,
  onAddPatientRequired,
}) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const manageAssessment = (): void => {
    onAddPatientRequired((): void => {
      dispatch(
        push(`/readings/new`, {
          assessment: followUp,
          patient: selectedPatient,
          status: followUp
            ? FormStatusEnum.UPDATE_ASSESSMENT
            : FormStatusEnum.ADD_ASSESSMENT,
        })
      );
    }, `You haven't added this patient to your health facility. You need to do that before you can edit this patient. Would like to add this patient?`);
  };

  return (
    <div className={classes.container}>
      {referral ? (
        <>
          <Header
            assessed={Boolean(followUp)}
            dateReferred={referral.dateReferred}
            healthFacilityName={referral.referralHealthFacilityName}
          />
          {!followUp && (
            <div className={classes.comment}>
              <Typography>
                <b>Comment:</b>
              </Typography>
              <Typography variant="subtitle1">{referral.comment}</Typography>
            </div>
          )}
        </>
      ) : (
        <Typography variant="h5" component="h3">
          No Referral
        </Typography>
      )}
      <Assessment followUp={followUp} />
      {referral && (
        <Button
          className={classes.button}
          color="primary"
          variant="outlined"
          onClick={manageAssessment}>
          {followUp ? `Update Assessment` : `Assess`}
        </Button>
      )}
    </div>
  );
};
