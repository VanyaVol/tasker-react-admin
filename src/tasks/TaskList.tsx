import * as React from 'react';
import {Fragment, memo, useEffect, useState} from 'react';
import BookIcon from '@mui/icons-material/Book';
import {Box, Chip, useMediaQuery} from '@mui/material';
import {Theme, styled} from '@mui/material/styles';
import lodashGet from 'lodash/get';
import jsonExport from 'jsonexport/dist';
import {
    BooleanField,
    BulkDeleteButton,
    BulkExportButton,
    ChipField,
    SelectColumnsButton,
    CreateButton,
    DatagridConfigurable,
    DateField,
    downloadCSV,
    EditButton,
    ExportButton,
    FilterButton,
    List,
    NumberField,
    ReferenceArrayField,
    ReferenceManyCount,
    SearchInput,
    ShowButton,
    SimpleList,
    SingleFieldList,
    TextField,
    TextInput,
    TopToolbar,
    useTranslate, Title, Datagrid,
} from 'react-admin'; // eslint-disable-line import/no-unresolved

// import ResetViewsButton from './ResetViewsButton';
// import axios from "axios";
export const PostIcon = BookIcon;

const TaskList = () => {

    return (
        <div>
            Tasks
        </div>
    );
};


export default TaskList;
