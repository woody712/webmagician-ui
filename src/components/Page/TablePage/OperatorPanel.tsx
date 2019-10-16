import React, { Component } from 'react';
import { Button, Checkbox, Dropdown, Menu, Tooltip } from 'antd';

import { FormattedMessage } from 'umi-plugin-react/locale';
import { StandardTableColumnProps } from '@/components/StandardTable';

import styles from '@/components/Page/TablePage/index.less';

interface OperatorPanelProps {
  columns: StandardTableColumnProps<any>[];
  selectedRows: any[];
  batchDelete: boolean;
  onBatchDelete: React.MouseEventHandler<HTMLElement>;
  onSearch: React.MouseEventHandler<HTMLElement>;
  onSelectedDisplayColumnKeyChange?: (selectedKeys: string[]) => void;
  operatorRender: () => React.ReactNode;
}

interface OperatorPanelState {
  /**
   * controlling whether the visibility of dropdown
   */
  switchDropdownVisible: boolean;
  selectedDisplayColumnsKey: string[];
}

class OperatorPanel extends Component<OperatorPanelProps, OperatorPanelState> {
  constructor(props: OperatorPanelProps) {
    super(props);
    this.state = {
      switchDropdownVisible: false,
      selectedDisplayColumnsKey: props.columns.map((x, index) =>
        (x.key || x.dataIndex || index).toString(),
      ),
    };
  }

  onSelectedDisplayColumnKeyChangeCallback(keys: string[]) {
    this.setState({ selectedDisplayColumnsKey: keys });

    const { onSelectedDisplayColumnKeyChange } = this.props;
    if (onSelectedDisplayColumnKeyChange) {
      onSelectedDisplayColumnKeyChange(keys);
    }
  }

  handleMenuItemClick = (info: { keyPath: string; key: string }) => {
    const { selectedDisplayColumnsKey } = this.state;
    const index = selectedDisplayColumnsKey.indexOf(info.key);
    if (index >= 0) {
      selectedDisplayColumnsKey.splice(index, 1);
    } else {
      selectedDisplayColumnsKey.push(info.key);
    }
    this.onSelectedDisplayColumnKeyChangeCallback(selectedDisplayColumnsKey);
  };

  handleSwitchMenuSelectAll = () => {
    const { columns } = this.props;
    const selectedDisplayColumnsKey = columns.map((x, index) =>
      (x.key || x.dataIndex || index).toString(),
    );
    this.onSelectedDisplayColumnKeyChangeCallback(selectedDisplayColumnsKey);
  };

  handleSwitchMenuSelectReverse = () => {
    const { columns } = this.props;
    const { selectedDisplayColumnsKey } = this.state;
    const filterColumns = columns.filter(
      (x, index) =>
        selectedDisplayColumnsKey.indexOf((x.key || x.dataIndex || index).toString()) < 0,
    );
    this.onSelectedDisplayColumnKeyChangeCallback(
      filterColumns.map((x, index) => (x.key || x.dataIndex || index).toString()),
    );
  };

  handleSwitchMenusVisibleChange = (flag: boolean) => {
    this.setState({ switchDropdownVisible: flag });
  };

  renderSwitchMenus(items: StandardTableColumnProps<any>[]): React.ReactElement<any>[] {
    const { selectedDisplayColumnsKey } = this.state;

    return items.map((item, index) => {
      const key = (item.key || item.dataIndex || index).toString();
      return (
        <Menu.Item key={key}>
          <Checkbox checked={selectedDisplayColumnsKey.indexOf(key) >= 0} />
          <span style={{ marginLeft: 8 }}>{item.title}</span>
        </Menu.Item>
      );
    });
  }

  renderSwitchDropdown(): React.ReactElement {
    const { columns } = this.props;

    const menu = (
      // @ts-ignore
      <Menu multiple onClick={this.handleMenuItemClick}>
        {this.renderSwitchMenus(columns)}
        <div className="ant-table-filter-dropdown-btns">
          <a
            className="ant-table-filter-dropdown-link confirm"
            onClick={this.handleSwitchMenuSelectAll}
          >
            {<FormattedMessage id="app.common.label.select-all" />}
          </a>
          <a
            className="ant-table-filter-dropdown-link clear"
            onClick={this.handleSwitchMenuSelectReverse}
          >
            {<FormattedMessage id="app.common.label.select-reversely" />}
          </a>
        </div>
      </Menu>
    );

    return (
      <Dropdown
        overlay={menu}
        onVisibleChange={this.handleSwitchMenusVisibleChange}
        visible={this.state.switchDropdownVisible}
      >
        <Button shape="circle" icon="appstore" />
      </Dropdown>
    );
  }

  render() {
    const { selectedRows, batchDelete, operatorRender, onBatchDelete, onSearch } = this.props;

    return (
      <div className={styles.tableListOperator}>
        <div>
          {operatorRender()}
          {selectedRows.length > 0 && batchDelete && (
            <Button onClick={onBatchDelete} icon="delete" type="danger">
              <FormattedMessage id="component.common.text.delete" />
            </Button>
          )}
        </div>
        <div className={styles.tableListOperatorRight}>
          <Tooltip title={<FormattedMessage id="component.common.text.refresh" />}>
            <Button shape="circle" icon="sync" onClick={onSearch} />
          </Tooltip>
          <Tooltip title={<FormattedMessage id="app.common.label.columns-display-settings" />}>
            {this.renderSwitchDropdown()}
          </Tooltip>
        </div>
      </div>
    );
  }
}

export default OperatorPanel;
