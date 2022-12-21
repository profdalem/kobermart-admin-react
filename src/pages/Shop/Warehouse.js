

import React, { Component} from "react";
import PropTypes from "prop-types";
import {
  Container,
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
//i18n
import { withTranslation } from "react-i18next";

class ShopWarehouse extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {}

  async componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    //meta title
    document.title = "Gudang | Kobermart Admin";
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            {/* Render Breadcrumb */}
            <Breadcrumbs
              title={this.props.t("Belanja")}
              breadcrumbItem={this.props.t("Gudang")}
            />
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

ShopWarehouse.propTypes = {
  t: PropTypes.any,
  error: PropTypes.any,
  success: PropTypes.any,
};

export default withTranslation()(ShopWarehouse);
