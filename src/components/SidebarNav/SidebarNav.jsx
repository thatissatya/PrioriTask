import { useEffect, useRef, useState } from "react";
import "./SidebarNav.css";
import createTask from "../../../public/assets/createTask.svg";
import Icon from "../../modules/Icon";

export const SidebarNav = (props) => {
  const [navigation, setNavigation] = useState([
    {
      id: "dashboard",
      title: "Dashboard",
      icon: 'dashboard',
      path: "",
      children: [],
    },
    {
      id: "board",
      title: "Project Board",
      icon: 'board',
      path: "",
      children: [
        {
          id: "crossXWebapp",
          title: "Cross X Web app",
          icon: "",
          path: "",
        },
        {
          id: "bakingApp",
          title: "Banking App",
          path: "",
        },
      ],
      open: false,
    },
    {
      id: "feed",
      title: "Feed",
      icon: 'feed',
      path: "",
      children: [],
    },
    {
      id: "message",
      title: "Messages",
      icon: 'message',
      path: "",
      count: 7,
      children: [],
    },
    {
      id: "teamMembers",
      title: "Team members",
      icon: 'members',
      path: "",
      children: [],
    },
  ]);

  const navRef = useRef(null)
  const [openSidebar, isOpenSidebar] = useState(false);

  const [selectedNav, setSelectedNav] = useState(navigation[0].id);
  const [selectedSubNav, setSelectedSubNav] = useState(null);

  const userProfile = {
    userId: "",
    name: "Comeron Williamson",
    profileURL:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    username: "xComeron_88",
  };

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target) && openSidebar) {
        isOpenSidebar(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef, openSidebar]);

  const onToggleSubPart = ({id}) =>{
    const localNavigation = structuredClone(navigation);
    const navigationIndex = navigation.findIndex((nav) => nav.id === id);
    localNavigation[navigationIndex].open = !navigation[navigationIndex].open;
    setNavigation(localNavigation);

  }

  const isEmpty = (value) => {
    if (
      value?.length === 0 ||
      value === 0 ||
      value === undefined ||
      value === null
    ) {
      return true;
    }
    return false;
  };
  return (
    <>
      <div ref={navRef} className={'ui-sidebar-nav ' + (openSidebar? 'ui-sidebar-nav--open':'') }>
      <div className="ui-sidebar-nav__profile">
        <div className="ui-sidebar-nav__profile__left">
          <div className="ui-sidebar-nav__profile__left__cover">
            <img
              className={"ui-sidebar-nav__profile__left__cover__image "} 
              src={props.user.photoURL}
              alt="N/A"
            />
          </div>
          
        </div>
        <div className="ui-sidebar-nav__profile__right">
          <div className="ui-sidebar-nav__profile__right__name">
            {props.user.displayName}
          </div>
          <div className="ui-sidebar-nav__profile__right__username">
            {props.user.email}
          </div>
        </div>
      </div>
      <div className="ui-sidebar-nav__navigation">
        {navigation.map((navigation) => {
          const isActive = navigation.id === selectedNav;
          const itemClassName = (isActive ? 'ui-sidebar-nav__navigation__item--select ' : '') + 'ui-sidebar-nav__navigation__item';
          return (
          <div className={itemClassName} key={navigation.id}>
            {isActive && <div className="ui-sidebar-nav__navigation__item__arrow">
              
              </div>}
            <div className="ui-sidebar-nav__navigation__item__main" role='button' tabIndex={'0'} onClick={()=> {
              setSelectedNav(navigation.id);
              setSelectedSubNav(null);
            }
            }>
              <div className="ui-sidebar-nav__navigation__item__main__icon">
                {/* <img src={icons[navigation.id]} alt /> */}
                <Icon id={navigation.icon} iconFill = {isActive && '#f13983'} />
                
              </div>
              <div className="ui-sidebar-nav__navigation__item__main__name">
                {navigation.title}
              </div>
              {!isEmpty(navigation.count) && (
                <div className="ui-sidebar-nav__navigation__item__main__count">
                  {navigation.count}
                </div>
              )}
              {!isEmpty(navigation.children) && (
                <div className="ui-sidebar-nav__navigation__item__main__extends" role='button' tabIndex={'0'} onClick={() => onToggleSubPart({id : navigation.id})} >
                  <Icon id={navigation.open?'arrowUp':'arrowDown'} iconFill = {isActive && '#f13983'} />
                </div>
              )}
            </div>
            {}
            {!isEmpty(navigation.children) && navigation.open && (
              <div className="ui-sidebar-nav__navigation__item__parts">
                {navigation.children.map((subPart) =>{
                  const isSubPartSelected = selectedSubNav === subPart.id;
                  const subPartClassName = (isSubPartSelected ? 'ui-sidebar-nav__navigation__item__parts__part--selected ' : '') + 'ui-sidebar-nav__navigation__item__parts__part';
                  return (
                    <div
                      className={subPartClassName}
                      key={subPart.id}
                    >
                      {/* <div className="ui-sidebar-nav__navigation__item__parts__part__step"></div> */}
                      <div className="ui-sidebar-nav__navigation__item__parts__part__name" 
                      role='button'
                      tabIndex={'0'}
                      onClick={(()=>{
                        setSelectedNav(navigation.id);
                        setSelectedSubNav(subPart.id);
                        
                      })}>{subPart.title}</div>
                      
                    </div>
                  );

                })}
              </div>
            )}
          </div>
                )
        
                })}
      </div>
      <div className="ui-sidebar-nav__create">
        <div className="ui-sidebar-nav__create__avatar">
          <img src={createTask} alt="createTask" />
        </div>
        <div className="ui-sidebar-nav__create__wrapper">
              <div className="ui-sidebar-nav__create__wrapper__description"
              >
                Don't have any new task?
              </div>
              <div className="ui-sidebar-nav__create__wrapper__btn">
                  Create new task  +
              </div>
        </div>
      </div>
      </div>
      <div className={"ui-menu-button " + (openSidebar? 'ui-menu-button--close' : '' )} role={'button'} tabIndex={'0'} onClick={()=>isOpenSidebar(true)}>
        <i className="fa fa-bars"></i>
      </div>
    </>
    
  );
};
