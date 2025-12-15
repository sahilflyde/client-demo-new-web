import ImageCard from "./card";
import GridSection from "./gridWrapper";
import Container from "./spacing";

export default function TargetAudienceSectionComp(props) {
  const {
    label,
    title,
    subtitle,
    columns,
    gap,
    minColWidth,
    centerTitle,
    items,

    // ⭐ these come from DB
    labelVariant = "",
    titleVariant = "",
    subtitleVariant = "",
  } = props;

  return (
    <Container variant="primary">
      <GridSection
        label={label}
        title={title}
        subtitle={subtitle}
        columns={columns}
        gap={gap}
        minColWidth={minColWidth}
        centerTitle={centerTitle}
        // ⭐ Pass override variants correctly
        labelTypo={labelVariant}
        sectionHeaderTypo={titleVariant}
        sectionDescTypo={subtitleVariant}
        items={items?.map((item) => ({
          colSpan: item.colSpan || 1,
          rowSpan: item.rowSpan || 1,
          component: (
            <ImageCard
              heading={item.heading}
              description={item.description}
              imageLink={item.imageLink}
              textPosition={item.textPosition || "bottom"}
            />
          ),
        }))}
      />
    </Container>
  );
}
