// import expressError from "../Error/expressError";
export default class CrudService {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    try {
      return await this.model.create(data);
    } catch (error) {
      throw new Error(`Error creating document: ${error.message}`);
    }
  }
  async getOneByQuery(query, populate = "", select = undefined) {
    const document = await this.model
      .findOne(query)
      .populate(populate)
      .select(select);
    if (!document) throw new Error("Document Not Found");
    return document;
  }
  async getById(id, populate = "", select = undefined) {
    try {
      const document = await this.model
        .findById(id)
        .populate(populate)
        .select(select);
      if (!document) {
        throw new Error("Document not found.");
      }
      return document;
    } catch (error) {
      throw new Error(`Error fetching document: ${error.message}`);
    }
  }

  async getAll(filters = {}, populate = "", limit = 10, skip = 0) {
    try {
      return await this.model
        .find(filters)
        .populate(populate)
        .limit(limit)
        .skip(skip);
    } catch (error) {
      throw new Error(`Error fetching documents: ${error.message}`);
    }
  }

  async updateById(id, data) {
    try {
      const document = await this.model.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true,
      });
      if (!document) {
        throw new Error("Document not found.");
      }
      return document;
    } catch (error) {
      throw new Error(`Error updating document: ${error.message}`);
    }
  }

  async deleteById(id) {
    try {
      const document = await this.model.findByIdAndDelete(id);
      if (!document) {
        throw new Error("Document not found.");
      }
      return document;
    } catch (error) {
      throw new Error(`Error deleting document: ${error.message}`);
    }
  }
}
