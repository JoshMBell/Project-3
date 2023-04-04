CREATE TABLE commodity_prices (
   ID VARCHAR(10) PRIMARY KEY,
   Date DATE NOT NULL,
   Cu_USD_pound DECIMAL(12,8),
   Au_USD_oz DECIMAL(12,8),
   Fe_USD_tonne DECIMAL(12,8),
   Oil_Price_USD_Barrel DECIMAL(12,8)
);

CREATE TABLE expendature_by_commodity (
    date DATE,
    nsw_copper DECIMAL(10,2),
    nsw_silver_lead_zinc DECIMAL(10,2),
    nsw_nickel_cobalt DECIMAL(10,2),
    nsw_selected_base_metals_total DECIMAL(10,2),
    nsw_gold DECIMAL(10,2),
    nsw_iron_ore DECIMAL(10,2),
    nsw_mineral_sands DECIMAL(10,2),
    nsw_uranium DECIMAL(10,2),
    nsw_coal DECIMAL(10,2),
    nsw_diamonds DECIMAL(10,2),
    nsw_other DECIMAL(10,2),
    nsw_total DECIMAL(10,2),
    vic_copper DECIMAL(10,2),
    vic_silver_lead_zinc DECIMAL(10,2),
    vic_nickel_cobalt DECIMAL(10,2),
    vic_selected_base_metals_total DECIMAL(10,2),
    vic_gold DECIMAL(10,2),
    vic_iron_ore DECIMAL(10,2),
    vic_mineral_sands DECIMAL(10,2),
    vic_uranium DECIMAL(10,2),
    vic_coal DECIMAL(10,2),
    vic_diamonds DECIMAL(10,2),
    vic_other DECIMAL(10,2),
    vic_total DECIMAL(10,2),
    qld_copper DECIMAL(10,2),
    qld_silver_lead_zinc DECIMAL(10,2),
    qld_nickel_cobalt DECIMAL(10,2),
    qld_selected_base_metals_total DECIMAL(10,2),
    qld_gold DECIMAL(10,2),
    qld_iron_ore DECIMAL(10,2),
    qld_mineral_sands DECIMAL(10,2),
    qld_uranium DECIMAL(10,2),
    qld_coal DECIMAL(10,2),
    qld_diamonds DECIMAL(10,2),
    qld_other DECIMAL(10,2),
    qld_total DECIMAL(10,2),
    sa_copper DECIMAL(10,2),
    sa_silver_lead_zinc DECIMAL(10,2),
    sa_nickel_cobalt DECIMAL(10,2),
    sa_selected_base_metals_total DECIMAL(10,2),
    sa_gold DECIMAL(10,2),
    sa_iron_ore DECIMAL(10,2),
    sa_mineral_sands DECIMAL(10,2),
    sa_uranium DECIMAL(10,2),
    sa_coal DECIMAL(10,2),
    sa_diamonds DECIMAL(10,2),
    sa_other DECIMAL(10,2),
    sa_total DECIMAL(10,2),
    wa_copper DECIMAL(10,2),
    wa_silver_lead_zinc DECIMAL(10,2),
    wa_nickel_cobalt DECIMAL(10,2),
    wa_selected_base_metals_total DECIMAL(10,2),
    wa_gold DECIMAL(10,2),
    wa_iron_ore DECIMAL(10,2),
    wa_mineral_sands DECIMAL(10,2),
    wa_uranium DECIMAL(10,2),
    wa_coal DECIMAL(10,2),
    wa_diamonds DECIMAL(10,2),
    wa_other DECIMAL(10,2),
    wa_total DECIMAL(10,2),
    tas_copper DECIMAL(10,2),
    tas_silver_lead_zinc DECIMAL(10,2),
    tas_nickel_cobalt DECIMAL(10,2),
    tas_selected_base_metals_total DECIMAL(10,2),
    tas_gold DECIMAL(10,2),
    tas_iron_ore DECIMAL(10,2),
    tas_mineral_sands DECIMAL(10,2),
    tas_uranium DECIMAL(10,2),
    tas_coal DECIMAL(10,2),
    tas_diamonds DECIMAL(10,2),
    tas_other DECIMAL(10,2),
    tas_total DECIMAL(10,2),
    nt_copper DECIMAL(10,2),
    nt_silver_lead_zinc DECIMAL(10,2),
    nt_nickel_cobalt DECIMAL(10,2),
    nt_selected_base_metals_total DECIMAL(10,2),
    nt_gold DECIMAL(10,2),
    nt_iron_ore DECIMAL(10,2),
    nt_mineral_sands DECIMAL(10,2),
    nt_uranium DECIMAL(10,2),
    nt_coal DECIMAL(10,2),
    nt_diamonds DECIMAL(10,2),
    nt_other DECIMAL(10,2),
    nt_total DECIMAL(10,2),
    australia_copper DECIMAL(10,2),
    australia_silver_lead_zinc DECIMAL(10,2),
    australia_nickel_cobalt DECIMAL(10,2),
	australia_selected_base_metals_total DECIMAL(10,2),
    australia_gold DECIMAL(10,2),
    australia_iron_ore DECIMAL(10,2),
    australia_mineral_sands DECIMAL(10,2),
    australia_uranium DECIMAL(10,2),
    australia_coal DECIMAL(10,2),
    australia_diamonds DECIMAL(10,2),
    australia_other DECIMAL(10,2),
    australia_total DECIMAL(10,2)
);

select * from expendature_by_commodity;

	