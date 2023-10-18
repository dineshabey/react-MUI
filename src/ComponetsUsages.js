import React from 'react';
import BasicButtons from './components/BasicButtons';
import LoadingButtonsTransition from './components/LoadingButtonsTransition';
import CustomizedRating from './components/CustomizedRating';
import SelectOtherProps from './components/SelectOtherProps';
import BasicTextFields from './components/BasicTextFields';
import Types from './components/Types';
import ScrollDialog from './components/ScrollDialog';
import TemporaryDrawer from './components/TemporaryDrawer';

export default function () {
    return (
        <div>
            <BasicButtons />
            <LoadingButtonsTransition />
            <CustomizedRating />
            <SelectOtherProps />
            <BasicTextFields />
            <br />
            <Types />
            <br />
            <ScrollDialog />
            <TemporaryDrawer />

        </div>
    )
}
