import { AppDataSource } from '../data-source'
import { Organization } from '../entities/organization.entity'

export class OrganizationService {
	private organizationRepository = AppDataSource.getRepository(Organization)

	async createOrganization(
		data: Partial<Organization>
	): Promise<Organization> {
		const newOrganization = this.organizationRepository.create(data)
		return this.organizationRepository.save(newOrganization)
	}

	async getOrganizations(): Promise<Organization[]> {
		return this.organizationRepository.find()
	}
}
