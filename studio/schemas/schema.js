// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import blockContent from './documents/blockContent'
import blockText from './documents/blockText'
import category from './documents/category'
import companyInfo from './documents/companyInfo'
import mainImage from './documents/mainImage'
import page from './documents/page'
import person from './documents/person'
import sampleProject from './documents/sampleProject'
import siteSettings from './documents/siteSettings'
import slideshow from './documents/slideshow'

// Object types
import bioPortableText from './objects/bioPortableText'
import figure from './objects/figure'
import projectMember from './objects/projectMember'
import projectPortableText from './objects/projectPortableText'
import simplePortableText from './objects/simplePortableText'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'portfolio',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    blockText,
    category,
    companyInfo,
    bioPortableText,
    figure,
    projectMember,
    projectPortableText,
    simplePortableText,
    mainImage,
    page,
    // The following are document types which will appear
    // in the studio.
    category,
    person,
    sampleProject,
    siteSettings,
    slideshow
  ])
})
