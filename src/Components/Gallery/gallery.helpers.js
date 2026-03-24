import { GALLERY_CONFIG, GALLERY_COL_CLASSES } from "./gallery.config";

export const GALLERY_CATEGORY_KEYS = Object.keys(GALLERY_CONFIG);

export const buildGalleryItems = (t) => {
  const allItems = [];

  Object.entries(GALLERY_CONFIG).forEach(([categoryKey, config]) => {
    const rawItems = t(config.translationKey, { returnObjects: true });
    const translatedItems = Array.isArray(rawItems) ? rawItems : [];
    const detailLabel = t(config.detailLabelKey);

    if (!Array.isArray(rawItems)) {
      console.warn(
        `[buildGalleryItems] translationKey "${config.translationKey}" is not an array:`,
        rawItems,
      );
      return;
    }

    translatedItems.forEach((item, index) => {
      allItems.push({
        id: `${categoryKey}-${index + 1}`,
        category: categoryKey,
        img: `${config.imagePrefix}${index + 1}.jpg`,
        title: item?.title || "",
        subtitle: item?.subtitle || "",
        desc: item?.desc || "",
        detailLabel:
          typeof detailLabel === "string" ? detailLabel : `${categoryKey} collection`,
        cardClassName: config.cardClassName,
        addclass: GALLERY_COL_CLASSES[index] || "col-lg-4 col-md-6",
      });
    });
  });

  return allItems;
};