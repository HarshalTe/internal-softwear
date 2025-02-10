import { useState } from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";
import { connect } from "react-redux";

const Sidebar = (props) => {
  const [collapseOpen, setCollapseOpen] = useState();
  const [masterMenuOpen, setMasterMenuOpen] = useState(false);
  const [master2MenuOpen, setMaster2MenuOpen] = useState(false);
  const [master3MenuOpen, setMaster3MenuOpen] = useState(false);
  const [master4MenuOpen, setMaster4MenuOpen] = useState(false);
  const [master5MenuOpen, setMaster5MenuOpen] = useState(false);
  const [master6MenuOpen,setMaster6MenuOpen] = useState(false);
  const [master7MenuOpen, setMaster7MenuOpen] = useState(false);
  const [master8MenuOpen, setMaster8MenuOpen] = useState(false);
  

  const toggleCollapse = () => {
    setCollapseOpen((data) => !data);
  };

  const closeCollapse = () => {
    setCollapseOpen(false);
  };

  const toggleMasterMenu = () => {
    setMasterMenuOpen(!masterMenuOpen);
  };

  const toggleMaster2Menu = () => {
    setMaster2MenuOpen(!master2MenuOpen);
  };

  const toggleMaster3Menu = () => {
    setMaster3MenuOpen(!master3MenuOpen);
  };
  const toggleMaster4Menu = () => {
    setMaster4MenuOpen(!master4MenuOpen);
  };
  const toggleMaster5Menu = () => {
    setMaster5MenuOpen(!master5MenuOpen);
  };
  const toggleMaster6Menu = () => {
    setMaster6MenuOpen(!master6MenuOpen);
  };
  const toggleMaster7Menu = () => {
    setMaster7MenuOpen(!master7MenuOpen);
  };
  const toggleMaster8Menu = () => {
    setMaster8MenuOpen(!master8MenuOpen);
  };


  const { bgColor, routes, logo } = props;
  let navbarBrandProps;
  if (logo && logo.innerLink) {
    navbarBrandProps = {
      to: logo.innerLink,
      tag: Link,
    };
  } else if (logo && logo.outterLink) {
    navbarBrandProps = {
      href: logo.outterLink,
      target: "_blank",
    };
  }

  const renderNavContent = () => (
    <PerfectScrollbar className="sidebar-nav">
      <Nav vertical navbar>
        <li>
          <NavItem>
            <NavLink
              to="/"
              tag={NavLinkRRD}
              onClick={closeCollapse}
              activeClassName="active"
            >
              <i className="fas fa-tachometer-alt text-orange" />
              Dashboard
            </NavLink>
          </NavItem>
        </li>
        
        {/* Master Menu */}
        <li>
          <NavItem>
            <NavLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleMasterMenu();
              }}
              className="nav-link-collapse"
            >
              <i className="fas fa-database text-orange" />
              Master
              <i 
                className={`ni ni-bold-${masterMenuOpen ? 'up' : 'down'} ml-auto`}
                style={{ marginTop: '6px' }}
              />
            </NavLink>
          </NavItem>
          <Collapse isOpen={masterMenuOpen}>
            <Nav className="flex-column">
             {/* <NavItem>
                <NavLink
                  to="/admin/users"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-single-02 text-blue" />
                  Users
                </NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink
                  to="/admin/companies"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-building text-info" />
                  Companies
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/admin/services"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-briefcase-24 text-success" />
                  Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/admin/clients"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-circle-08 text-warning" />
                  Clients
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/admin/vendors"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-delivery-fast text-danger" />
                  Vendors
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/admin/roles"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-key-25 text-purple" />
                  Roles
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/admin/users"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-single-02 text-info" />
                  Users
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/admin/expensetypes"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-money-coins text-warning" />
                  Expense Types
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/admin/holidays"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-calendar-grid-58 text-danger" />
                  Holidays
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </li> 
         
        {/* Master2 Menu */}
        <li>
          <NavItem>
            <NavLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleMaster2Menu();
              }}
              className="nav-link-collapse"
            >
              <i className="fas fa-user-shield text-orange" />
              Roles & Permissions
              <i 
                className={`ni ni-bold-${master2MenuOpen ? 'up' : 'down'} ml-auto`}
                style={{  marginTop: '6px' }}
              />
            </NavLink>
          </NavItem>
          <Collapse isOpen={master2MenuOpen}>
            <Nav className="flex-column">
              <NavItem>
                <NavLink
                  to="/admin/pages"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-spaceship text-purple" />
                  Pages
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/admin/permissions"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-palette text-yellow" />
                  Permissions
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </li>

        {/* Master3 Menu */}
        <li>
          <NavItem>
            <NavLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleMaster3Menu();
              }}
              className="nav-link-collapse"
            >
              <i className="fas fa-tasks text-orange" />
              Project Management
              <i 
                className={`ni ni-bold-${master3MenuOpen ? 'up' : 'down'} ml-auto`}
                style={{  marginTop: '6px' }}
              />
            </NavLink>
          </NavItem>
          <Collapse isOpen={master3MenuOpen}>
            <Nav className="flex-column">
              <NavItem>
                <NavLink
                  to="/admin/projects"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-building text-info" />
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/admin/projectresources"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-badge text-success" />
                  Project Resources
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/admin/credentials"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-badge text-success" />
                  Credentials
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/admin/addonservices"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-briefcase-24 text-primary" />
                  Add On Services
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/admin/scopeofWorks"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-single-copy-04 text-warning" />
                  Scope Of Works
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/admin/task"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-check-bold text-danger" />
                  Tasks
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/admin/tasklogs"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-archive-2 text-purple" />
                  Task Logs
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </li>

         {/* Master4 Menu */}
         <li>
          <NavItem>
            <NavLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleMaster4Menu();
              }}
              className="nav-link-collapse"
            >
              <i className="fas fa-cogs text-orange" />
              AMC Management
              <i 
                className={`ni ni-bold-${master4MenuOpen ? 'up' : 'down'} ml-auto`}
                style={{  marginTop: '6px' }}
              />
            </NavLink>
          </NavItem>
          <Collapse isOpen={master4MenuOpen}>
            <Nav className="flex-column">
              <NavItem>
                <NavLink
                  to="/admin/amcs"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-spaceship text-purple" />
                  AMCs
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/admin/amctask"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-check-bold text-success" />
                  Amc Tasks
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/admin/amctimelines"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-calendar-grid-58 text-info" />
                  Amc Timelines
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </li>

         {/* Master5 Menu */}
         <li>
          <NavItem>
            <NavLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleMaster5Menu();
              }}
              className="nav-link-collapse"
            >
              <i className="fas fa-users text-orange" />
              Employee Management
              <i 
                className={`ni ni-bold-${master5MenuOpen ? 'up' : 'down'} ml-auto`}
                style={{  marginTop: '6px' }}
              />
            </NavLink>
          </NavItem>
          <Collapse isOpen={master5MenuOpen}>
            <Nav className="flex-column">
              <NavItem>
                <NavLink
                  to="/admin/attendances"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-badge text-success" />
                  Attendances
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/admin/breaks"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-watch-time text-info" />
                  Breaks
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/admin/leaves"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-calendar-grid-58 text-teal" />
                  Leaves
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/admin/issues"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-folder-17 text-danger" />
                  Issues
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/admin/complaints"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-chat-round text-primary" />
                  Complaints
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/admin/notifications"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-bell-55 text-purple" />
                  Notifications
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/admin/meetings"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-calendar-grid-58 text-info"  />
                  Meetings
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </li>

         {/* Master6 Menu */}
         <li>
          <NavItem>
            <NavLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleMaster6Menu();
              }}
              className="nav-link-collapse"
            >
              <i className="fas fa-comment-dots text-orange" />
              Feedback Management
              <i 
                className={`ni ni-bold-${master6MenuOpen ? 'up' : 'down'} ml-auto`}
                style={{ float: 'right', marginTop: '6px' }}
              />
            </NavLink>
          </NavItem>
          <Collapse isOpen={master6MenuOpen}>
            <Nav className="flex-column">
              <NavItem>
                <NavLink
                  to="/admin/feedbackFroms"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-spaceship text-purple" />
                  Feedback Froms
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/admin/questions"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-chat-round text-green" />
                  Questions
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/admin/answers"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-check-bold text-red" />
                  Answers
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/admin/retings"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="fas fa-star text-warning" />
                  Ratings
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </li>

         {/* Master7 Menu */}
         <li>
          <NavItem>
            <NavLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleMaster7Menu();
              }}
              className="nav-link-collapse"
            >
              <i className="fas fa-user-tie text-orange" />
              Lead Management
              <i 
                className={`ni ni-bold-${master7MenuOpen ? 'up' : 'down'} ml-auto`}
                style={{ float: 'right', marginTop: '6px' }}
              />
            </NavLink>
          </NavItem>
          <Collapse isOpen={master7MenuOpen}>
            <Nav className="flex-column">
              <NavItem>
                <NavLink
                  to="/admin/leads"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-circle-08 text-warning" />
                  Leads
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/admin/followUps"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-chat-round text-green" />
                  Follow Ups
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/admin/proposals"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-paper-diploma text-red" />
                  Proposals
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/admin/callLogs"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-headphones text-teal" />
                  Call Logs
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </li>

        {/* Master8 Menu */}
        <li>
          <NavItem>
            <NavLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleMaster8Menu();
              }}
              className="nav-link-collapse"
            >
              <i className="fas fa-file-invoice text-orange" />
              Bill Management
              <i 
                className={`ni ni-bold-${master8MenuOpen ? 'up' : 'down'} ml-auto`}
                style={{ float: 'right', marginTop: '6px' }}
              />
            </NavLink>
          </NavItem>
          <Collapse isOpen={master8MenuOpen}>
            <Nav className="flex-column">
              <NavItem>
                <NavLink
                  to="/admin/invoices"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-credit-card text-blue" />
                  Invoices
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/admin/invoiceDetails"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-paper-diploma text-green" />
                  Invoice Details
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/admin/payments"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-money-coins text-yellow" />
                  Payments
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/admin/expenses"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                  activeClassName="active"
                  className="pl-4"
                >
                  <i className="ni ni-palette text-yellow" />
                  Expenses
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </li>
        
      </Nav>
    </PerfectScrollbar>
  );

  // Rest of the component remains the same
  if (props.login?.login?.user?.role === "admin") {
    return (
      <Navbar
        className="navbar-vertical fixed-left navbar-light bg-white"
        expand="md"
        id="sidenav-main"
      >
        <Container fluid>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-icon" />
          </button>
          {logo ? (
            <NavbarBrand className="pt-0" {...navbarBrandProps}>
              <img
                alt={logo.imgAlt}
                className="navbar-brand-img"
                src={logo.imgSrc}
              />
            </NavbarBrand>
          ) : null}
          <Nav className="align-items-center d-md-none">
            <UncontrolledDropdown nav>
              <DropdownToggle nav className="nav-link-icon">
                <i className="ni ni-bell-55" />
              </DropdownToggle>
              <DropdownMenu
                aria-labelledby="navbar-default_dropdown_1"
                className="dropdown-menu-arrow"
                right
              >
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Something else here</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav>
              <DropdownToggle nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      src={
                        require("../../assets/img/theme/team-1-800x800.jpg")
                          .default
                      }
                    />
                  </span>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Collapse navbar isOpen={collapseOpen}>
            <div className="navbar-collapse-header d-md-none">
              <Row>
                {logo ? (
                  <Col className="collapse-brand" xs="6">
                    {logo.innerLink ? (
                      <Link to={logo.innerLink}>
                        <img alt={logo.imgAlt} src={logo.imgSrc} />
                      </Link>
                    ) : (
                      <a href={logo.outterLink}>
                        <img alt={logo.imgAlt} src={logo.imgSrc} />
                      </a>
                    )}
                  </Col>
                ) : null}
                <Col className="collapse-close" xs="6">
                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleCollapse}
                  >
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            {renderNavContent()}
          </Collapse>
        </Container>
      </Navbar>
    );
  } else {
    // Non-admin view remains the same
    return (
      <Navbar
        className="navbar-vertical fixed-left navbar-light bg-white"
        expand="md"
        id="sidenav-main"
      >
        <Container fluid>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-icon" />
          </button>
          {logo ? (
            <NavbarBrand className="pt-0" {...navbarBrandProps}>
              <img
                alt={logo.imgAlt}
                className="navbar-brand-img"
                src={logo.imgSrc}
              />
            </NavbarBrand>
          ) : null}
          <Nav className="align-items-center d-md-none">
            {/* Similar dropdown code as admin view */}
          </Nav>
          <Collapse navbar isOpen={collapseOpen}>
            <div className="navbar-collapse-header d-md-none">
              <Row>
                {logo ? (
                  <Col className="collapse-brand" xs="6">
                    {logo.innerLink ? (
                      <Link to={logo.innerLink}>
                        <img alt={logo.imgAlt} src={logo.imgSrc} />
                      </Link>
                    ) : (
                      <a href={logo.outterLink}>
                        <img alt={logo.imgAlt} src={logo.imgSrc} />
                      </a>
                    )}
                  </Col>
                ) : null}
                <Col className="collapse-close" xs="6">
                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleCollapse}
                  >
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            {renderNavContent()}
          </Collapse>
        </Container>
      </Navbar>
    );
  }
};

Sidebar.defaultProps = {
  routes: [{}],
};

Sidebar.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    innerLink: PropTypes.string,
    outterLink: PropTypes.string,
    imgSrc: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = (state) => {
  return {
    login: state.login,
    users: state.users,
  };
};

export default connect(mapStateToProps)(Sidebar);