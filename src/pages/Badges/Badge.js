import React from 'react'
import BadgeCard from '../../components/BadgeCard'
import { Container, Grid } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import BadgeData from "./BadgesData.json"
import { Stack } from 'react-bootstrap';

const Badges = () => {
  const BadgeList = () =>
    BadgeData.map((badge, i) => (
      <BadgeCard
        key={i}
        id={badge.id}
        name={badge.name}
        org={badge.org}
        Details={badge.details}
        images={badge.images}

      />
    ));
  return (
    <div>
      <section className="contact">
        <PageHeader title="Badges" description="who verified me" />
      </section>

      <div className="row">
        <BadgeList />
      </div>
    </div>

  )
}

export default Badges
