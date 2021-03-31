import React, { useState } from "react";

import { Anchor, Drawer, Button } from "antd";

const { Link } = Anchor;

function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo-trimera">
          <img
            src="/images/logo_trimera.png"
            alt="Logo Trimera"
            id="logo_trimera"
          />
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="20">
            <Link href="#hero" title="Home" />
            <Link href="#roadmap" title="Roadmap" />
            <Link href="#feature" title="Explore"/>
            <Link href="#works" title="Support Us"/>
            <Link href="#faq" title="Team" />
            <Link href="#pricing" title="Pricing" />
            <Link href="#contact" title="Contact"/>
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="20">
              <Link href="#hero" title="Home" />
              <Link href="#roadmap" title="Roadmap" />
              <Link href="#feature" title="Features" />
              <Link href="#works" title="How it works" />
              <Link href="#faq" title="FAQ" />
              <Link href="#pricing" title="Pricing" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
